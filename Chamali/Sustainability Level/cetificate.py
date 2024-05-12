from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
import io


def create_overlay(text, page_width, page_height):
    packet = io.BytesIO()
    can = canvas.Canvas(packet, pagesize=(page_width, page_height))
    text_width = can.stringWidth(text, 'Helvetica', 50)

    x = (float(page_width) - text_width) / 2
    y = float(page_height) / 2
    can.drawString(x, y, text)
    can.save()
    packet.seek(0)
    return packet


def add_text_to_pdf(input_pdf_path, output_pdf_path, text):
    reader = PdfReader(input_pdf_path)
    writer = PdfWriter()


    for page_number in range(len(reader.pages)):
        page = reader.pages[page_number]
        page_media_box = page.mediabox
        page_width = float(page_media_box.upper_right[0])
        page_height = float(page_media_box.upper_right[1])


        overlay_pdf = create_overlay(text, page_width, page_height)
        overlay = PdfReader(overlay_pdf).pages[0]


        page.merge_page(overlay)
        writer.add_page(page)

    with open(output_pdf_path, 'wb') as f_out:
        writer.write(f_out)

# Usage
input_pdf = '2.pdf'
output_pdf = 'output.pdf'

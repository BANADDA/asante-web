import os
import sys

try:
    import PyPDF2
except ImportError:
    print("PyPDF2 not installed. Installing now...")
    os.system("pip install PyPDF2")
    import PyPDF2

def extract_text_from_pdf(pdf_path):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            num_pages = len(reader.pages)
            
            print(f"PDF has {num_pages} pages.")
            print("Extracting text from PDF...")
            
            for page_num in range(num_pages):
                page = reader.pages[page_num]
                text = page.extract_text()
                print(f"\n--- PAGE {page_num + 1} ---\n")
                print(text)
                
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    pdf_path = "C:/Users/HP/Documents/asante-web/public/pdf/company-profile-2025.pdf"
    extract_text_from_pdf(pdf_path) 
# BarbQR: Barcode and QR Code Generator

## Overview
BarbQR is a web-based barcode and QR code generator that allows users to quickly generate and customize barcodes and QR codes for various uses. Built using modern web technologies like **TypeScript**, **Tailwind CSS**, and **ReactJS**, the platform offers a fast and responsive user experience for creating barcodes and QR codes on the fly.

### Resources and Technologies Used:
- **Technologies:**
  - TypeScript
  - Tailwind CSS

- **Tailwind CSS Docs:** [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **ReactJS Docs:** [ReactJS Docs](https://reactjs.org/docs/getting-started.html)

## App Description
BarbQR is an intuitive barcode and QR code generator that enables users to create various types of codes for use in marketing, inventory management, or personal projects. The app is designed with simplicity in mind, offering customization options and a user-friendly interface.

### Key Features:
- **QR Code Generation:** Easily generate QR codes by entering data such as URLs, text, phone numbers, emails, or custom content.
- **Barcode Generation:** Create multiple types of barcodes, including Code 128, EAN-13, and UPC-A, suitable for products or inventory.
- **Responsive Design:** The app is fully responsive and works seamlessly on both desktop and mobile devices.
- **User-Friendly Interface:** The clean and simple design ensures users can generate codes quickly without any hassle.

Built with **ReactJS** and **TypeScript**, BarbQR uses a component-based architecture for easy maintainability and scalability. **Tailwind CSS** is used to style the app, providing a fast and flexible design system that can be easily customized.

## What I Learned
- **QR and Barcode Libraries:** Integrated QR code and barcode generation libraries such as `qrcode.react` and `jsbarcode` to handle the generation and rendering of the codes.
- **Responsive Web Design:** Focused on creating a responsive design that adapts to various screen sizes, ensuring accessibility and usability on mobile devices.
- **UI/UX Design:** Improved my skills in creating a clean, minimal, and intuitive interface that provides users with a smooth experience.

## Potential Future Upgrades
- **Barcode/QR Code Scanning:** Add a feature to scan barcodes and QR codes using the device’s camera for real-time scanning and data extraction.
- **Multiple File Formats:** Offer additional file formats for downloads such as SVG, PDF, and EPS for high-quality print and digital usage.
- **Batch Code Generation:** Implement batch generation for creating multiple barcodes or QR codes at once by uploading a list of data.
- **Authentication:** Introduce user accounts and authentication to allow users to save their generated codes and download history.
- **Advanced Customization:** Enable more advanced customization options such as logo embedding into QR codes or barcode text styling.

## Getting Started

To get started with BarbQR, follow these steps:

### Prerequisites:
- **npm** or **yarn** as the package manager

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/derickcnguyen/barbqr.git
   cd barbqr

   npm install
   npm audit fix
   npm run dev

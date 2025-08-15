// /src/app/invoice/page.tsx
'use client';

import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Code, Download } from 'lucide-react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

const InvoicePage = () => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = invoiceRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2, // Increase scale for better quality
      useCORS: true,
      backgroundColor: null,
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 15;

    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('invoice.pdf');
  };

  const invoiceData = {
    invoiceNumber: 'INV-2024-00123',
    issueDate: '2024-08-15',
    dueDate: '2024-09-14',
    customer: {
      name: 'Innovate Corp.',
      address: '123 Tech Street, Silicon Valley, CA 94000',
      email: 'contact@innovatecorp.com',
    },
    items: [
      { id: 1, description: 'E-commerce Platform Development', quantity: 1, unitPrice: 15000, total: 15000 },
      { id: 2, description: 'IT Consultancy (20 hours)', quantity: 20, unitPrice: 150, total: 3000 },
      { id: 3, description: 'Website Modernization', quantity: 1, unitPrice: 8000, total: 8000 },
      { id: 4, description: 'Hosting & Maintenance (1 Year)', quantity: 1, unitPrice: 1200, total: 1200 },
    ],
    subtotal: 27200,
    taxRate: 0.08, // 8%
    tax: 2176,
    total: 29376,
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
        <Header/>
        <main className="flex-1 py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-headline">Sample Invoice</h1>
                    <Button onClick={handleDownloadPdf}>
                    <Download className="mr-2" />
                    Download PDF
                    </Button>
                </div>

                <Card className="max-w-4xl mx-auto shadow-2xl" id="invoice-content" ref={invoiceRef}>
                    <CardHeader className="p-8 bg-card rounded-t-lg">
                    <div className="flex justify-between items-start">
                        <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Code className="h-8 w-8 text-primary" />
                            <h2 className="text-2xl font-bold text-foreground">ImmaraApps</h2>
                        </div>
                        <p className="text-muted-foreground">123 App Avenue, Suite 100</p>
                        <p className="text-muted-foreground">Dev City, DC 54321</p>
                        <p className="text-muted-foreground">contact@immaraapps.com</p>
                        </div>
                        <div className="text-right">
                        <h3 className="text-3xl font-bold text-primary tracking-tight">INVOICE</h3>
                        <p className="text-muted-foreground mt-1"># {invoiceData.invoiceNumber}</p>
                        </div>
                    </div>
                    </CardHeader>
                    <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                        <h4 className="font-semibold text-muted-foreground mb-2">BILL TO</h4>
                        <p className="font-bold text-foreground">{invoiceData.customer.name}</p>
                        <p className="text-muted-foreground">{invoiceData.customer.address}</p>
                        <p className="text-muted-foreground">{invoiceData.customer.email}</p>
                        </div>
                        <div className="text-right">
                        <div className="mb-2">
                            <p className="font-semibold text-muted-foreground">Issue Date</p>
                            <p className="text-foreground">{invoiceData.issueDate}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-muted-foreground">Due Date</p>
                            <p className="text-foreground">{invoiceData.dueDate}</p>
                        </div>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="w-[60%]">Description</TableHead>
                            <TableHead className="text-right">Qty</TableHead>
                            <TableHead className="text-right">Unit Price</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {invoiceData.items.map((item) => (
                            <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.description}</TableCell>
                            <TableCell className="text-right">{item.quantity}</TableCell>
                            <TableCell className="text-right">${item.unitPrice.toFixed(2)}</TableCell>
                            <TableCell className="text-right font-semibold">${item.total.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>

                    <Separator className="my-8" />

                    <div className="flex justify-end">
                        <div className="w-full max-w-xs space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-medium text-foreground">${invoiceData.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Tax ({invoiceData.taxRate * 100}%)</span>
                            <span className="font-medium text-foreground">${invoiceData.tax.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-xl">
                            <span className="font-bold text-foreground">Total</span>
                            <span className="font-bold text-primary">${invoiceData.total.toFixed(2)}</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center text-muted-foreground text-sm">
                        <p className="font-semibold">Thank you for your business!</p>
                        <p>Please make payment by the due date. For any inquiries, contact us at payments@immaraapps.com.</p>
                    </div>
                    </CardContent>
                </Card>
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default InvoicePage;

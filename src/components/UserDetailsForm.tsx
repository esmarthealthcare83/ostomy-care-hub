import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserDetailsFormProps {
  product: {
    id: string;
    name: string;
    price: string;
    pack: string;
  };
  onSuccess?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function UserDetailsForm({ 
  product, 
  onSuccess, 
  disabled = false, 
  className = '',
  children 
}: UserDetailsFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `*New Order Request*%0A%0A` +
      `*Product Details*%0A` +
      `Name: ${product.name}%0A` +
      `Price: ${product.price}%0A` +
      `Pack: ${product.pack}%0A%0A` +
      `*Customer Details*%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Address: ${formData.address}%0A` +
      `Pincode: ${formData.pincode}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919494486312?text=${message}`, '_blank');
    
    // Close dialog and reset form
    setIsOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      pincode: ''
    });
    
    if (onSuccess) onSuccess();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className={`btn-hero flex-1 ${className}`}
          disabled={disabled}
        >
          {children || 'Add to Cart'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Your Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Delivery Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode *</Label>
            <Input
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full">
              Proceed to WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
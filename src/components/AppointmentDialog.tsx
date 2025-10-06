import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AppointmentDialogProps {
  children?: React.ReactNode;
}

export function AppointmentDialog({ children }: AppointmentDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `*New Appointment Request*%0A%0A` +
      `*Customer Details*%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A%0A` +
      `*Appointment Details*%0A` +
      `Preferred Date: ${formData.preferredDate}%0A` +
      `Preferred Time: ${formData.preferredTime}%0A` +
      `Service Type: ${formData.serviceType}%0A` +
      `Message: ${formData.message || 'N/A'}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919088869996?text=${message}`, '_blank');

    // Close dialog and reset form
    setIsOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || <Button className="btn-hero">Book Appointment</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
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
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select onValueChange={(value) => handleSelectChange('serviceType', value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ostomy-consultation">Ostomy Consultation</SelectItem>
                <SelectItem value="product-demonstration">Product Demonstration</SelectItem>
                <SelectItem value="wound-care">Wound Care</SelectItem>
                <SelectItem value="mobility-assessment">Mobility Assessment</SelectItem>
                <SelectItem value="general-healthcare">General Healthcare</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredDate">Preferred Date *</Label>
            <Input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredTime">Preferred Time *</Label>
            <Select onValueChange={(value) => handleSelectChange('preferredTime', value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</SelectItem>
                <SelectItem value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</SelectItem>
                <SelectItem value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</SelectItem>
                <SelectItem value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full">
              Book Appointment via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
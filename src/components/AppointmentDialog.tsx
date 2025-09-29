import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AppointmentDialog({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="date">Preferred Date</Label>
            <Input id="date" type="date" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Additional details..." />
          </div>
          <Button type="submit" className="w-full">Submit Appointment Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
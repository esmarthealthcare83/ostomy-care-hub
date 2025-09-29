import { MapPin } from "lucide-react";

export function Branches() {
  const cities = ["Hyderabad", "Vijayawada", "Vizag"];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Serving Communities Across</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city} className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold">{city}</h3>
                <p className="text-muted-foreground">Quality healthcare services</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-4">Find Us on the Map</h3>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.379!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
      </div>
    </section>
  );
}
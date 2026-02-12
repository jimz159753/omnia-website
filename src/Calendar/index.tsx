"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@/hooks/useCustomMediaQuery";
import { calendarStyles } from "./Calendar.styles";
import ImageCatalog from "@/ImageCatalog";
// Cosmetology images
import cosmo2 from "@/assets/cosmetology/2.webp";
import cosmo3 from "@/assets/cosmetology/3.webp";
import cosmo4 from "@/assets/cosmetology/4.webp";
import cosmo5 from "@/assets/cosmetology/5.webp";
import cosmo6 from "@/assets/cosmetology/6.webp";
import cosmo7 from "@/assets/cosmetology/7.webp";
import cosmo8 from "@/assets/cosmetology/8.webp";
import cosmo9 from "@/assets/cosmetology/9.webp";
import cosmo10 from "@/assets/cosmetology/10.webp";
import cosmo11 from "@/assets/cosmetology/11.webp";
import cosmo12 from "@/assets/cosmetology/12.webp";
import cosmo13 from "@/assets/cosmetology/13.webp";

// Holistic images
import hol2 from "@/assets/holistic/2.webp";
import hol3 from "@/assets/holistic/3.webp";
import hol4 from "@/assets/holistic/4.webp";
import hol5 from "@/assets/holistic/5.webp";
import hol6 from "@/assets/holistic/6.webp";
import hol7 from "@/assets/holistic/7.webp";
import hol8 from "@/assets/holistic/8.webp";
import hol9 from "@/assets/holistic/9.webp";

// Image arrays for each catalog
const cosmetologyImages = [
  cosmo2,
  cosmo3,
  cosmo4,
  cosmo5,
  cosmo6,
  cosmo7,
  cosmo8,
  cosmo9,
  cosmo10,
  cosmo11,
  cosmo12,
  cosmo13,
];

const holisticImages = [
  hol2,
  hol3,
  hol4,
  hol5,
  hol6,
  hol7,
  hol8,
  hol9,
];

interface BookingCalendar {
  id: string;
  slug: string;
  name: string;
  isActive: boolean;
  showOnMainPage: boolean;
}

const Calendar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = calendarStyles(isMobile);
  
  const [calendarSlug, setCalendarSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await fetch("/api/booking-calendars");
        if (response.ok) {
          const calendars: BookingCalendar[] = await response.json();
          // Only show a calendar if it's explicitly marked for main page display
          const mainPageCalendar = calendars.find((cal) => cal.showOnMainPage && cal.isActive);
          
          if (mainPageCalendar) {
            setCalendarSlug(mainPageCalendar.slug);
          }
          // If no calendar is toggled for main page, don't show anything (calendarSlug stays null)
        }
      } catch (err) {
        console.error("Error fetching calendar:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendar();
  }, []);

  // Don't render anything if no calendar is toggled for main page
  if (!loading && !calendarSlug) {
    return null;
  }

  return (
    <section
      id="reservas"
      className="calendar-container"
      style={styles.container}
    >
      <div style={styles.headerContainer}>
        <p style={styles.title}>Reserva tu cita</p>
        <p style={styles.subtitle}>
          Para cualquier consulta, reserva tu cita a través de nuestro
          calendario.
        </p>
      </div>

      {/* Services Showcase Section */}
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center justify-center gap-12 w-full pt-12`}>
        {/* Cosmetology Section */}
        <div className="flex flex-col">
          <div className="mb-6 px-4">
            <h3 className="text-[#86694B] font-serif text-center text-3xl mb-2 tracking-wide">Cosmetología</h3>
            <div className="h-0.5 mx-auto w-16 bg-[#86694B]/30"></div>
          </div>
          <ImageCatalog images={cosmetologyImages} />
        </div>

        {/* Holistic Section */}
        <div className="flex flex-col">
          <div className="mb-6 px-4">
            <h3 className="text-[#86694B] font-serif text-center text-3xl mb-2 tracking-wide">Holística</h3>
            <div className="h-0.5 mx-auto w-16 bg-[#86694B]/30"></div>
          </div>
          <ImageCatalog images={holisticImages} />
        </div>
      </div>

      <div style={styles.calendarContainer}>
        {loading ? (
          <div style={{ ...styles.calendar, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "500px" }}>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#86694B]"></div>
          </div>
        ) : (
          <iframe
            src={`/book/${calendarSlug}`}
            style={{
              ...styles.calendar,
              border: "none",
              minHeight: isMobile ? "700px" : "800px",
              width: "100%",
              maxWidth: "900px",
            }}
            title="Booking Calendar"
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
};

export default Calendar;

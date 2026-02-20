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

const Calendar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = calendarStyles(isMobile);

  console.log(isMobile);

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
      <div style={{display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "center", gap: "12px", width: "100%", paddingTop: "12px"}}>
        {/* Cosmetology Section */}
          <div style={{width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} className="mb-6 px-4">
            <h3 className="text-[#86694B] font-serif text-center text-3xl mb-2 tracking-wide">Cosmetología</h3>
            <ImageCatalog images={cosmetologyImages} />
          </div>

        {/* Holistic Section */}
          <div style={{width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} className="mb-6 px-4">
            <h3 className="text-[#86694B] font-serif text-center text-3xl mb-2 tracking-wide">Holística</h3>
            <ImageCatalog images={holisticImages} />
          </div>
      </div>

      <div style={styles.calendarContainer}>
          <iframe 
            src="https://sinapz.up.railway.app/book/marzo-luisjc140992?embedded=true" 
            style={styles.calendar}
            title="Booking Calendar"
            height="700px"
          ></iframe>
      </div>
    </section>
  );
};

export default Calendar;

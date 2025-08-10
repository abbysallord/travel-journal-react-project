import Header from "./components/Header"
import Entry from "./components/Entry"

export default function App(){
  return(
    <>
      <Header />
      <Entry 
        img={{
          src: "https://media.istockphoto.com/id/1468474311/photo/mt-fuji.webp?a=1&b=1&s=612x612&w=0&k=20&c=aOB_-6Ys459DgRXBKrza81BCyk-qKwIyi8qRTnY98r0=",
          alt: "Mount Fuji"
        }}
        country = "Japan"
        place = "Mount Fuji"
        days = "12 Jan, 2025 - 24 Jan 2025"
        description = "Mount Fuji, located on the Japanese island of Honshu, is the highest mountain in Japan, standing at 3,776.24 meters (12,389 feet). It is an active stratovolcano, classified as such due to its formation from the gradual accumulation of lava, ash, and volcanic debris over time."
        googleMaps = "https://maps.app.goo.gl/GzUfA1jbybMGbNsZ7"
      />
      <Entry 
        img={{
          src: "https://static.vecteezy.com/system/resources/thumbnails/050/686/604/small/jeju-island-south-korea-top-view-realistic-place-beautiful-background-photo.jpg",
          alt: "Jeju Island"
        }}
        country = "South Korea"
        place = "Jeju Island"
        days = "24 Jan, 2025 - 31 Jan 2025"
        description = "Jeju Island is South Korea's largest island, covering an area of approximately 1,826 to 1,846 km² (705 to 707.8 sq mi), which constitutes about 1.83% of the country's total land area."
        googleMaps = "https://maps.app.goo.gl/pNpb2FpWWD1GBxSd6"
      />
      <Entry 
        img={{
          src: "https://media.gettyimages.com/id/sb10069125u-001/photo/india-udaipur-lake-palace-hotel.jpg?s=612x612&w=0&k=20&c=6iR6c-bN_n6LhX8GwjvaFA7PHtq6mIArgxaRSKXkn_M=",
          alt: "Lake Pichola"
        }}
        country = "India"
        place = "Udaipur, Lake Pichola"
        days = "31 Jan, 2025 - 14 Feb 2025"
        description = "Lake Pichola is an artificial freshwater lake located in the heart of Udaipur, Rajasthan, India, and is one of the city's most iconic attractions. Created in 1362 AD by a Banjara tribesman named Pichhu Banjara during the reign of Maharana Lakha, the lake was initially built to meet the drinking water and irrigation needs of the region."
        googleMaps = "https://maps.app.goo.gl/ev7vJd9ue1xBASXu7"
      />
    </>
  )
}
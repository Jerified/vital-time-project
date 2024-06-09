import { ICountry } from '../interfaces/list'
import Countries from '../Components/Countries'

export default function Home() {
    const countries: ICountry[] = [
        { id: 1, name: "Scotland Islands", place: "Sydney, Australia", src: '/images/image1.png' },
        { id: 2, name: "The Charles Grand Brasserie & Bar", place: "Lorem ipsum, Dolor", src: '/images/image2.png' },
        { id: 3, name: "Bridge Climb", place: "Dolor, Sit amet", src: '/images/image3.png' },
        { id: 4, name: "Scotland Island", place: "Sydney, Australia", src: '/images/image4.png' },
        { id: 5, name: "Clam Bar", place: "Etcetera veni, Vidi vici", src: '/images/image5.png' },
        { id: 6, name: "Vivid Festival", place: "Sydney, Australia", src: '/images/image6.png' }
    ]
  return (
    <main className="select-none">
        <Countries countries={countries} />
     {/* {countries.map((country) => {
        <div
        }) } */}
    </main>
  );
}

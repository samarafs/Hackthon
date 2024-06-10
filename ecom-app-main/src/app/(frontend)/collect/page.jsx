import Image from "next/image";
import styles from "../../../styles/donate.module.css";

export default function Donate() {
  return (
    <div className="flex flex-col">
      <div className={styles.photo}>
        <h1 className="flex justify-center align-center text-6xl italic font-semibold mt-10 text-white">
          Donate your used materials
        </h1>
      </div>
      <div className="w-full pt-96">
        <div className="w-full flex flex-col justify-center align-center text-center">
          <p className="mt-10 mb-4 font-semibold text-xl ">Why Donate?</p>
          <p>
            I specialize in creating art from repurposed and upcycled materials.
            Not only does this approach help reduce waste, but it also allows me
            to tell compelling stories through the textures, colors, and
            histories of the items I use. Your unwanted or unused items could
            find a second life in my artwork, helping to shape something truly
            unique and meaningful.
          </p>
          <p className="mt-10 mb-4 font-semibold text-xl">
            What Can You Donate?
          </p>
          <p className="mb-4 ">
            I am looking for a variety of materials, including but not limited
            to:
          </p>
          <ul className="text-center text-sm">
            <li>Scrap wood and metal</li>
            <li>Fabric and textiles</li>
            <li>Old jewelry and beads</li>
            <li>Vintage items and trinkets</li>
            <li>Plastic containers and lids</li>
          </ul>
          <p className="mt-4">
            If you have any items that don’t quite fit this list but think they
            could be interesting, please feel free to reach out!
          </p>
          <p className="mt-10 mb-4 font-semibold text-xl">How to Donate</p>
          <p className="mb-2">Drop off materials at my studio:</p>
          <p className="mb-10">
            Av. Vergílio Ferreira 2282, 1950-342 Lisboa Lisboa, Portugal
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";

export default function PictureModalPage({ params }) {
  const router = useRouter();

  console.log("SLUG PARAMS SENT DOWN THE TREE", params);
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  console.log("HERE", newsItem);
  return (
    <div className="modal-backdrop" onClick={router.back}>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <p>IN MODAL</p>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width="800"
            height="800"
          />
        </div>
      </dialog>
    </div>
  );
}

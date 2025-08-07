import { getNewsItem } from "@/lib/getNews";
import { notFound } from "next/navigation";
import Image from "next/image";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function PictureModalPage({ params }) {
  const newsItemSlug = await params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  console.log("HERE", newsItem);
  return (
    <>
      <ModalBackdrop />
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
    </>
  );
}

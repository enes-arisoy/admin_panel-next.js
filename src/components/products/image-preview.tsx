"use client";

import { FC, useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

interface Props {
  imageInputId: string;
}

const ImagePreview: FC<Props> = ({ imageInputId }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // component yüklenince
  useEffect(() => {
    // resim url'inin girildi inğutun değerini al
    const imageInput = document.getElementById(imageInputId) as HTMLInputElement;

    // inputun girdisini takip et
    const handleChange = () => {
      const url = imageInput.value;
      setImageUrl(url);
      setIsLoading(true);

      if (url) {
        // url'in geçerli bir resim url'i olduğunu kontrol et
        const testImg = new globalThis.Image();

        // remin yüklendiğini kontrol et
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };
        // resim yüklenmezse
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };

        // test resminin kaynağını ayarla
        testImg.src = url;
      } else {
        setIsValid(false);
        setIsLoading(false);
      }
    };

    // input olay izleyicisi ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleChange);
      handleChange();
    }

    // component unmount anında izleyiciyi kaldır
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleChange);
      }
    };
  }, []);

  return (
    <Field htmlFor={imageInputId} label="Resim Önizleme">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div className="grid place-items-center size-full text-gray-400">Resim Yükleniyor</div>
        ) : isValid && imageUrl ? (
          <Image src={imageUrl} alt="Önizleme" fill className="object-contain" unoptimized />
        ) : (
          <span className="grid place-items-center size-full text-gray-400">
            {imageUrl ? "Geçersiz URL" : "Resim Yok"}
          </span>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
"use client";

import { useEffect, useState } from "react";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "./button";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

export const ImageUpload = ({ disabled, onChange, onRemove, value }: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="space-y-4">
            {/* Uploaded Images Grid */}
            {value.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {value.map((url) => (
                        <div key={url} className="relative group overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={url}
                                alt="Uploaded Image"
                                width={400}
                                height={400}
                                className="object-cover w-full h-40 sm:h-48 rounded-lg transition-transform duration-200 group-hover:scale-105"
                            />
                            <button
                                type="button"
                                onClick={() => onRemove(url)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                            >
                                <Trash className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Upload Button / Drop Zone */}
            <CldUploadWidget
                uploadPreset="ljd55qru"
                options={{ maxFiles: 1 }}
                onSuccess={(result: any) => {
                    onChange(result.info.secure_url);
                }}
            >
                {({ open }) => (
                    <div
                        onClick={() => open()}
                        className="border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer rounded-lg p-6 flex items-center justify-center flex-col text-gray-600 hover:bg-gray-50 transition"
                    >
                        <ImagePlus className="w-8 h-8 mb-2" />
                        <span className="text-sm">Click or drag images here to upload</span>
                    </div>
                )}
            </CldUploadWidget>
        </div>
    );
};

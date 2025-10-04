"use client"

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash } from "lucide-react"
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
// import AlertModal from "@/components/modals/AlertModal";
import instance from "@/lib/axios";
import AlbumForm from "./components/album-form";
import { Album as AlbumType } from "@/types/album";


interface AlbumFormProps {
    initialData: AlbumType | null
}



const AlbumFormPage = ({ initialData }: AlbumFormProps) => {
    const params = useParams();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Album" : "Create Album";
    const description = initialData ? "Edit a Album" : "Add a new Album";

    const [isClient, setIsClient] = useState(false)


    const onDelete = async () => {
        try {

            setLoading(true);
            await instance.delete(`/Albums/${params.AlbumId}`);
            router.push(`/Albums`);
            router.refresh();
            toast.success("Album Deleted.");

        } catch (error) {
            toast.error("Make sure you remove all Products using this Album first.");
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient)
        return null;

    return (
        <>
            {/* <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            /> */}
            <div className="flex justify-between items-center my-4">
                <Heading
                    title={title}
                    description={description}
                />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="icon"
                        onClick={() => { setOpen(true) }}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />

            {/* Form */}
            <AlbumForm />
            <Separator />


        </>
    )
}

export default AlbumFormPage;
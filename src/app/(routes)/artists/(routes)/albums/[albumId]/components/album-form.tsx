'use client'

import * as z from "zod";
import React from 'react'

import { ImageUpload } from '@/components/ui/image-upload'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import instance from "@/lib/axios-client";

const formSchema = z.object({
  mainImageUrl: z.string().min(1),
  coverImageUrl: z.string().min(1),
  name: z.string().min(1),
  cover: z.string().min(1),
})

type AlbumFormValues = z.infer<typeof formSchema>

const AlbumForm = ({
  initialData,
}: any) => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  
  const toastMsg = initialData ? "Album updated." : "Album created.";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<AlbumFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mainImageUrl: '',
      coverImageUrl: '',
      name: '',
      cover: '',
    }
  });

  const onSubmit = async (data: AlbumFormValues) => {
    // console.log(data);
    try {

      setLoading(true);
      if (initialData) {
        await instance.patch(`/albums/update`, data);
      } else {
        await instance.post(`/albums/create`, data);
      }
      router.refresh();
      router.push(`/artists/albums`);
      toast.success(toastMsg);

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className='p-4 mx-auto max-w-2xl'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <div className='grid grid-cols-4 grid-rows-3 gap-8 mb-4'>

            <div className='col-span-2 row-span-2'>
              <FormField
                control={form.control}
                name="mainImageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Main Album Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value ? [field.value] : []}
                        disabled={loading}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display main album Image.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>

            <div className='col-span-2 row-span-2 col-start-3'>
              <FormField
                control={form.control}
                name="coverImageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add cover Album Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value ? [field.value] : []}
                        disabled={loading}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display cover album Image.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='col-span-2 row-start-3'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Album name" disabled={loading} {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display album name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='col-span-2 row-start-3 col-start-3'>
              <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover</FormLabel>
                    <FormControl>
                      <Input placeholder="Cover Label" disabled={loading} {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display cover label.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex justify-end my-9'>

            <Button
              type="submit"
              disabled={false}
              className=""
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AlbumForm

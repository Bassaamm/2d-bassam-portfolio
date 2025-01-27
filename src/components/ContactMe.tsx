import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactMeValidation = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});
type ContactMeType = z.infer<typeof contactMeValidation>;

export default function ContactMe() {
  const { register, handleSubmit, formState } = useForm<ContactMeType>({
    resolver: zodResolver(contactMeValidation),
  });

  const errors = formState;
  return (
    <div className="bg-black w-full font-big-shot p-16 min-h-screen text-white">
      <div className="mx-auto max-w-3xl relative ">
        <Link
          to={"/"}
          className="md:text-4xl text-xl absolute top-0 -left-6 md:-left-36 cursor-pointer text-yellow-200"
        >
          {"<--"}back
        </Link>
        <div className="md:text-4xl text-3xl pt-20">Contact Me</div>
        <Separator className="my-6" color="white" />
        <div className="flex gap-8 flex-col items-center justify-center pt-10">
          <form action="" className="flex flex-col gap-8 w-full max-w-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="rounded-sm text-black px-2 border-gray-300 py-1 border-4 "
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">ُEmail</label>
              <input
                type="text"
                className="rounded-sm text-black px-2 border-gray-300 py-1 border-4 "
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Message</label>
              <textarea
                className="rounded-sm text-black px-2 border-gray-300 py-1 border-4 "
                name="name"
                id="name"
              />
            </div>
            <button className="bg-gray-400 text-black py-2 rounded-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

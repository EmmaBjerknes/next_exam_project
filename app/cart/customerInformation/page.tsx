"use client";
import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/app/utils/UserContext";
import ProgressBar from "@/app/components/Cart/ProgressBar";
import NavHomeButton from "@/app/components/Cart/NavHomeButton";

const formSchema = z.object({
  firstName: z
    .string({
      required_error: "Detta fält är obligatoriskt",
    })
    .min(1, { message: "Detta fält är obligatoriskt" })
    .max(50),
  lastName: z
    .string({
      required_error: "Detta fält är obligatoriskt",
    })
    .min(2, { message: "Detta fält är obligatoriskt" })
    .max(50),
  co: z.string(),
  address: z
    .string({
      required_error: "Detta fält är obligatoriskt",
    })
    .min(2, { message: "Detta fält är obligatoriskt" })
    .max(60),
  postnumber: z.coerce
    .number({
      required_error: "Detta fält är obligatoriskt",
      invalid_type_error: "Detta fält är obligatoriskt",
    })
    .refine((value) => value.toString().length >= 4, {
      message: "Ange minst 4 siffror",
    })
    .refine((value) => value.toString().length <= 6, {
      message: "Postnummer får max vara 6 siffror",
    }),
  city: z
    .string({
      required_error: "Detta fält är obligatoriskt",
    })
    .min(2, { message: "Detta fält är obligatoriskt" })
    .max(20),
  phonenumber: z.coerce
    .number({
      invalid_type_error: "Ange ett giltigt mobiltelefonnummer",
    })
    .refine((value) => value.toString().length >= 9, {
      message: "Ange minst 9 siffror",
    })
    .refine((value) => value.toString().length <= 10, {
      message: "Ange ett giltigt mobiltelefonnummer",
    }),
  email: z.string().email({ message: "Ange en giltig e-postadress" }),
});

const CustomerInformation = () => {
  const { user, setUser } = useUserInfo();
  const currentPage = "cart/customerInformation";
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      co: "",
      address: "",
      postnumber: "" as any,
      city: "",
      phonenumber: "" as any,
      email: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        co: user.co || "",
        address: user.address || "",
        postnumber: user.postnumber || ("" as any),
        city: user.city || "",
        phonenumber: user.phonenumber || ("" as any),
        email: user.email || "",
      });
    }
  }, [form, user]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedUser = {
      ...user,
      firstName: values.firstName,
      lastName: values.lastName,
      co: values.co,
      address: values.address,
      postnumber: values.postnumber,
      city: values.city,
      phonenumber: values.phonenumber,
      email: values.email,
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    router.push("/cart/payment");
  }

  return (
    <>
      <div className="w-full lg:w-3/5">
        <NavHomeButton />
      </div>
      <div className="mx-4">
        <h2> Kunduppgifter </h2>
        <h4>
          Vänligen fyll i dina personuppgifter så att ditt köp kan kopplas till
          dig.
        </h4>

        <Card className="w-[90%] max-w-md gap-8 mt-2 sm:mt-8 mx-auto">
          <Form {...form}>
            <CardContent className="p-6">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Förnamn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Efternamn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="co"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="C/O" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Adress" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="postnumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Postnummer"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Ort" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Mobilnummer"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Epost" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="p-0">
                  <Button type="submit" className="ml-auto">
                    <h4>Gå vidare till betalningssätt</h4>
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Form>
        </Card>
        <ProgressBar currentPage={currentPage} />
      </div>
    </>
  );
};

export default CustomerInformation;

"use client";
import React from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/app/utils/UserContext";

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
  postnumber: z.coerce.number({
    required_error: "Detta fält är obligatoriskt",
    invalid_type_error: "Detta fält är obligatoriskt",
  }),
  city: z
    .string({
      required_error: "Detta fält är obligatoriskt",
    })
    .min(2, { message: "Detta fält är obligatoriskt" })
    .max(20),
  phonenumber: z.coerce.number({
    required_error: "Ange ett giltigt mobiltelefonnummer",
    invalid_type_error: "Ange ett giltigt mobiltelefonnummer",
  }),
  email: z.string().email({ message: "Ange en giltig e-postadress" }),
});

const CustomerInformation = () => {
  const { user, setUser } = useUserInfo();
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
    <Card className="w-[90%] max-w-md">
      <CardHeader>
        <CardTitle>Kunduppgifter</CardTitle>
        <CardDescription>
          Vänligen fyll i dina personuppgifter så att ditt köp kan kopplas till
          dig.
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <Input placeholder="Mobilnummer" type="number" {...field} />
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
  );
};

export default CustomerInformation;

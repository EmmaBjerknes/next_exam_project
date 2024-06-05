"use client";
import { useState } from "react";
import AmountSummary from "@/app/components/Cart/AmountSummary";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/app/components/ui/form";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radiogroup";
import { useUserInfo } from "@/app/utils/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCardIcon, StoreIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["card", "instore"], {
    required_error: "Du måste välja leveranssätt",
  }),
});

const Payment = () => {
  const [showbtn, setShowbtn] = useState(true);
  const { user, setUser } = useUserInfo();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const updatedUser = { ...user, payment: data.type };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setShowbtn(false);
  }

  return (
    <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 justify-around md:flex-row">
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Betalningssätt</CardTitle>
          <CardDescription>Välj ditt betalningssätt.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem>
                          <FormControl>
                            <div>
                              <RadioGroupItem
                                value="card"
                                id="card"
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor="card"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                              >
                                <CreditCardIcon className="mb-3 h-6 w-6" />
                                Kort
                              </Label>
                            </div>
                          </FormControl>
                        </FormItem>

                        <FormItem>
                          <FormControl>
                            <div>
                              <RadioGroupItem
                                value="instore"
                                id="instore"
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor="instore"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                              >
                                <StoreIcon className="mb-3 h-6 w-6" />
                                Betala i butik
                              </Label>
                            </div>
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="p-0">
                <Button type="submit" className="ml-auto">
                  <h4>Välj</h4>
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>

      <AmountSummary
        btnText="Gå vidare till summering"
        path="/cart/confirmation"
        showBtn={showbtn}
      />
    </div>
  );
};

export default Payment;

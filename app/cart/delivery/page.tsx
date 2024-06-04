"use client";
import AmountSummary from "@/app/components/Cart/AmountSummary";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radiogroup";
import { useUserInfo } from "@/app/utils/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["0", "149"], {
    required_error: "Du måste välja leveranssätt",
  }),
});

const Delivery = () => {
  const [showbtn, setShowbtn] = useState(true);
  const { user, setUser } = useUserInfo();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const updatedUser = { ...user, delivery: data.type };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setShowbtn(false);
  }

  return (
    <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 justify-around md:flex-row">
      <Card className="h-fit">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      <h3>Välj leveranssätt</h3>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="0" />
                          </FormControl>
                          <FormLabel className="text-lg">
                            Hämta i butik - 0kr
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="149" />
                          </FormControl>
                          <FormLabel className="text-lg">
                            Hemlevernas - 149kr
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Välj</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <AmountSummary
        btnText="Gå vidare till kunduppgifter"
        path="/cart/customerInformation"
        showBtn={showbtn}
      />
    </div>
  );
};

export default Delivery;

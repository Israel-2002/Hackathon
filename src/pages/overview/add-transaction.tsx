import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Import this!
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const formSchema = z.object({
  date: z.string().min(1, {
    message: "Date is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  transaction_category: z.string().min(1, {
    message: "Category is required",
  }),
  transaction_type: z.string().min(1, {
    message: "Transaction type is required",
  }),
  amount: z.string().min(1, {
    message: "Amount is required",
  }),
});

export default function Addtransaction() {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Add this line!
    defaultValues: {
      date: "",
      description: "",
      transaction_category: "",
      transaction_type: "",
      amount: "",
    },
  });
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const token = localStorage.getItem("token");

  async function postTransactions(data: z.infer<typeof formSchema>) {
    const response = await fetch(`${apiUrl}/transactions/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await response.json();
    return res;
  }

  const { mutate, isPending } = useMutation({
    mutationFn: postTransactions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      setIsOpen(false);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-[#FC6060] px-4 py-2.5 text-white hover:bg-[#FC6060]/90"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="px-10 py-3">
        <X
          className="ml-auto cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <DialogHeader>
          <DialogTitle className="mb-4 text-2xl font-semibold">
            Add Transaction
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input placeholder="01/09/2002" {...field} type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter transaction description"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transaction_category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="salary">salary</SelectItem>
                      <SelectItem value="investment">investment</SelectItem>
                      <SelectItem value="sales">sales</SelectItem>
                      <SelectItem value="rent">rent</SelectItem>
                      <SelectItem value="utilities">utilities</SelectItem>
                      <SelectItem value="supplies">supplies</SelectItem>
                      <SelectItem value="marketing">marketing</SelectItem>
                      <SelectItem value="travel">travel</SelectItem>
                      <SelectItem value="other">other</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transaction_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select transaction type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="expense">Expense</SelectItem>
                      <SelectItem value="income">Income</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0.00"
                      {...field}
                      type="number"
                      min="0"
                      step="0.01"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isPending ? "Submitting" : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

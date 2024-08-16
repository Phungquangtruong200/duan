import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const forgotPasswordSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
});

const ForgotPassword = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: joiResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const { mutate } = useMutation({
        mutationFn: async (formData: { email: string }) => {
            const { data } = await axios.post(
                `http://localhost:8080/api/v1/auth/forgot`,
                formData
            );
            return data;
        },
        onSuccess: () => {
            toast({
                title: "Yêu cầu đặt lại mật khẩu đã được gửi!",
                description: "Vui lòng kiểm tra email của bạn.",
                variant: "success",
            });
            setTimeout(() => {
                navigate("/"); // Chuyển hướng về trang chủ hoặc trang khác sau khi gửi yêu cầu
            }, 500);
        },
        onError: (error) => {
            toast({
                title: "Yêu cầu đặt lại mật khẩu thất bại!",
                description: "Có lỗi xảy ra khi gửi yêu cầu.",
                variant: "destructive",
            });
            console.log(error);
        },
    });

    const onSubmit = (data: { email: string }) => {
        mutate(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập email của bạn..."
                                    type="email"
                                    {...field}
                                    id="email"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <Button type="submit">Gửi yêu cầu đặt lại mật khẩu</Button>
            </form>
        </Form>
    );
};

export default ForgotPassword;

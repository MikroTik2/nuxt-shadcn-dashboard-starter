<script setup lang="ts">
import { Toaster } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import { cn } from '@/lib/utils';
import { GithubLogoIcon } from '@radix-icons/vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import * as z from 'zod';

const isLoading = ref<boolean>(false);
const client = useSupabaseClient();

const { toast } = useToast();
const router = useRouter();

const accountFormSchema = toTypedSchema(z.object({
    email: z.string().min(1, 'Enter a valid email address').email('Enter a valid email address'),
}));

const { handleSubmit, resetForm } = useForm({
    validationSchema: accountFormSchema,
    initialValues: {
        email: 'demo@gmail.com',
    },
});

const onSubmit = handleSubmit(async (_values) => {
    isLoading.value = true;

    await new Promise(resolve => setTimeout(resolve, 2000));

    resetForm();
    toast({
        title: '🎉 Signed In Successfully!',
        duration: 5000,
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    await router.push('/dashboard/overview');
});
async function githubSignup() {
    isLoading.value = true;

    try {
        const { data } = await client.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${import.meta.env.SUPABASE_URL}/auth/v1/callback`,
            },
        });

        if (data.url) {
            window.location.href = data.url;
        }

        navigateTo('/dashboard/overview');
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to sign up with GitHub';

        toast({
            title: 'Sign Up Failed',
            description: errorMessage,
            variant: 'destructive',
            duration: 5000,
        });
    }
    finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
        <form class="space-y-2" :validate-schema="accountFormSchema" @submit.prevent="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                        <Input
                            id="email"
                            placeholder="Enter your email..."
                            type="email"
                            v-bind="componentField"
                            auto-capitalize="none"
                            auto-complete="email"
                            auto-correct="off"
                            :disabled="isLoading"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>

            <Button :disabled="isLoading" class="w-full" type="submit">
                <IconLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
                Continue with Email
            </Button>
        </form>
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
            </div>
        </div>
        <Button variant="outline" type="button" :disabled="isLoading" @click="githubSignup()">
            <IconLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
            <GithubLogoIcon v-else class="h-4 w-4" />
            Continue with Github
        </Button>
    </div>

    <Toaster />
</template>

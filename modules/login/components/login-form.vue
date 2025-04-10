<script setup lang="ts">
import { Toaster } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import { cn } from '@/lib/utils';
import { GithubLogoIcon } from '@radix-icons/vue';
import { toTypedSchema } from '@vee-validate/zod';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';
import * as z from 'zod';

const isLoading = ref<boolean>(false);

const auth = useFirebaseAuth();
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

async function signInWithSocial(type: 'google' | 'github') {
    if (auth) {
        let provider;

        switch (type) {
            case 'google':
                provider = new GoogleAuthProvider();
                break;
            case 'github':
                provider = new GithubAuthProvider();
                provider.addScope('user:email');
                break;
        };

        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        localStorage.setItem('name', user.displayName || '');
        localStorage.setItem('photo_url', user.photoURL || '');
        localStorage.setItem('email', user.email || '');

        toast({
            title: 'Success',
            description: 'You have successfully logged in!',
        });

        router.push('/dashboard/overview');
    }
    else {
        toast({
            title: 'Error',
            description: 'Authentication service is not available.',
            variant: 'destructive',
        });
    }
};

const onSubmit = handleSubmit(async (_values) => {
    isLoading.value = true;

    await new Promise(resolve => setTimeout(resolve, 2000));

    resetForm();
    toast({
        title: 'Success',
        description: 'You have successfully logged in!',
        duration: 5000,
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    await router.push('/dashboard/overview');
});
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
                Continue
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
        <div class="grid gap-2">
            <Button variant="outline" type="button" :disabled="isLoading" @click="signInWithSocial('google')">
                <IconLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
                <img v-else src="/assets/icons/google.svg" alt="google" class="h-4 w-4">
                Google
            </Button>
            <Button variant="outline" type="button" :disabled="isLoading" @click="signInWithSocial('github')">
                <IconLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
                <GithubLogoIcon v-else class="h-4 w-4" />
                GitHub
            </Button>
        </div>
    </div>

    <Toaster />
</template>

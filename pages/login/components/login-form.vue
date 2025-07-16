<script setup lang="ts">
import { cn } from '@/lib/utils';
import { SvgoGoogle } from '#components';
import { GithubLogoIcon } from '@radix-icons/vue';
import { toTypedSchema } from '@vee-validate/zod';
import { Input } from '@/components/ui/input';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';
import * as z from 'zod';
import { ref } from 'vue';

const isLoading = ref<boolean>(false);

const router = useRouter();

const accountFormSchema = toTypedSchema(
       z.object({
              email: z
                     .string()
                     .min(1, 'Enter a valid email address')
                     .email('Enter a valid email address'),
       })
);

const { handleSubmit, resetForm } = useForm({
       validationSchema: accountFormSchema,
       initialValues: {
              email: 'demo@gmail.com',
       },
});

const onSubmit = handleSubmit(async (_values) => {
       isLoading.value = true;

       await new Promise((resolve) => setTimeout(resolve, 2000));

       resetForm();

       await new Promise((resolve) => setTimeout(resolve, 1000));
       await router.push('/dashboard/tasks');
});
</script>

<template>
       <div :class="cn('grid gap-6', $attrs.class ?? '')">
              <form
                     class="space-y-2"
                     :validate-schema="accountFormSchema"
                     @submit.prevent="onSubmit"
              >
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
                            <LucideLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
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
                     <Button variant="outline" type="button" :disabled="isLoading">
                            <LucideLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
                            <SvgoGoogle
                                   v-else
                                   src="/assets/icons/google.svg"
                                   alt="google"
                                   class="h-4 w-4"
                            />
                            Google
                     </Button>
                     <Button variant="outline" type="button" :disabled="isLoading">
                            <LucideLoader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
                            <GithubLogoIcon v-else class="h-4 w-4" />
                            GitHub
                     </Button>
              </div>
       </div>
</template>

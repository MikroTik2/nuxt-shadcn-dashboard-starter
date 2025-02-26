<script setup lang="ts">
import { toast } from '~/components/ui/toast';
import SearchInput from './search-input.vue';
import SwitchTheme from './switch-theme.vue';

const client = useSupabaseClient();
const user = useSupabaseUser();

const isLoading = ref<boolean>(false);

async function signout() {
    isLoading.value = true;

    try {
        await client.auth.signOut();

        toast({
            title: 'Sign Out Success',
            description: 'You have successfully signed out of your account.',
            duration: 5000,
        });

        navigateTo('/login');
    }
    catch (error: any) {
        toast({
            title: 'Sign Out Failed',
            description: error.message,
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
    <div class="flex items-center justify-between gap-2 px-4">
        <SearchInput />
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar class="h-8 flex items-center justify-center w-8">
                    <AvatarFallback class="text-sm">
                        {{ user?.user_metadata.first_name?.charAt(0) }}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="min-w-60" align="end">
                <DropdownMenuLabel>
                    <div class="flex gap-2">
                        <Avatar class="h-8 dark:bg-[#222222] w-8 rounded-lg">
                            <AvatarFallback>
                                {{ user?.user_metadata.first_name?.charAt(0) }}
                            </AvatarFallback>
                        </Avatar>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold"> {{ user?.user_metadata.first_name }} </span>
                            <span class="truncate font-normal text-xs"> {{ user?.email }} </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Profile
                    <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Billing
                    <span class="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Settings
                    <span class="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
                </DropdownMenuItem>
                <DropdownMenuItem>New Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button variant="outline" type="button" :disabled="isLoading" @click="signout()">
                        <IconLogOut class="h-4 w-4" />
                        Sign Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <SwitchTheme />
    </div>
</template>

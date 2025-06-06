<script setup lang="ts">
import { cn } from '@/lib/utils';
import { GithubIcon } from 'lucide-vue-next';
import { buttonVariants } from '~/components/ui/button';
import SearchInput from './search-input.vue';
import SwitchTheme from './switch-theme.vue';

const router = useRouter();

const email = ref('');
const name = ref('');
const picture = ref('');

function signOut() {
    localStorage.clear();
    router.push('/');
};

onMounted(() => {
    email.value = localStorage.getItem('email') || '';
    name.value = localStorage.getItem('name') || '';
    picture.value = localStorage.getItem('photo_url') || '';
});
</script>

<template>
    <div class="flex items-center justify-between gap-2 px-4">
        <SearchInput />
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar class="h-8 flex items-center justify-center w-8">
                    <AvatarImage v-if="picture" :src="picture" alt="picture_image" />
                    <AvatarFallback v-else class="text-sm">
                        M
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="min-w-60" align="end">
                <DropdownMenuLabel>
                    <div class="flex gap-2">
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold"> {{ name ? name : 'Mark' }} </span>
                            <span class="truncate font-normal text-xs text-muted-foreground"> {{ email ? email : 'demo@gmail.com' }} </span>
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
                <DropdownMenuItem @click="signOut()">
                    Log out
                    <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <SwitchTheme />
        <a href="https://github.com/MikroTik2/nuxt-shadcn-dashboard-starter" target="_blank" rel="noopener noreferrer" :class="cn(buttonVariants({ variant: 'secondary', size: 'icon' }))" class="!w-8 !h-8">
            <GithubIcon />
        </a>
    </div>
</template>

<script setup lang="ts">
const open = ref<boolean>(false);

function toggleAlert() {
    open.value = !open.value;
};
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="w-8 float-end h-8 p-0">
                <span class="sr-only">Open menu</span>
                <IconMoreHorizontal class="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
                <IconCopy />
                Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IconView />
                View details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <IconEdit />
                Edit
            </DropdownMenuItem>
            <DropdownMenuItem @click="toggleAlert()">
                <IconTrash2 />
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

    <AlertDialog :open="open">
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action will permanently delete the category and the product
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <Button variant="outline" @click="toggleAlert()">
                    Cancel
                </Button>
                <Button variant="destructive" @click="toggleAlert()">
                    Continue
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

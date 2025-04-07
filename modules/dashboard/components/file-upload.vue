<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

import filterBytes from '@/utils/filter-bytes';

interface FileUploadProps {
    class?: HTMLAttributes['class'];
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxFiles?: number;
    maxSize?: number;
}

withDefaults(defineProps<FileUploadProps>(), {
    accept: 'image/*',
    multiple: false,
    disabled: false,
    maxFiles: 3,
    maxSize: 1,
});

const emit = defineEmits<{
    (e: 'onChange', files: File[]): void;
    (e: 'onRemove', files: File[]): void;
}>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const files = ref<File[]>([]);
const isActive = ref<boolean>(false);

function handleFileChange(newFiles: File[]) {
    const filesWithPreview = newFiles.map((file) => {
        return Object.assign(file, { preview: URL.createObjectURL(file) });
    });

    files.value = [...files.value, ...filesWithPreview];
    emit('onChange', files.value);
}

function onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files)
        return;
    handleFileChange(Array.from(input.files));
}

function handleClick() {
    fileInputRef.value?.click();
}

function handleEnter() {
    isActive.value = true;
}
function handleLeave() {
    isActive.value = false;
}
function handleDrop(e: DragEvent) {
    isActive.value = false;
    const droppedFiles = e.dataTransfer?.files ? Array.from(e.dataTransfer.files) : [];
    if (droppedFiles.length)
        handleFileChange(droppedFiles);
}

function isFileWithPreview(file: File): file is File & { preview: string } {
    return 'preview' in file && typeof file.preview === 'string';
}

function removeFile(index: number) {
    const file = files.value[index];
    if ('preview' in file) {
        URL.revokeObjectURL(file.preview as string);
    }
    files.value.splice(index, 1);
    emit('onRemove', files.value);
}
</script>

<template>
    <div class="relative flex flex-col gap-6 overflow-hidden">
        <div
            :class="cn('w-full', $props.class)"
            @dragover.prevent="handleEnter"
            @dragleave="handleLeave"
            @drop.prevent="handleDrop"
            @mouseover="handleEnter"
            @mouseleave="handleLeave"
        >
            <div
                class="relative grid h-52 w-full cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 place-items-center rounded-lg border-2 border-dashed px-5 py-2.5 text-center transition"
                @click="handleClick"
            >
                <input
                    ref="fileInputRef"
                    :multiple="$props.multiple"
                    :accept="accept"
                    class="hidden"
                    type="file"
                    @change="onFileChange"
                >

                <!-- Content -->
                <div class="flex flex-col items-center justify-center gap-4 sm:px-5">
                    <div class="rounded-full border border-dashed p-3">
                        <IconUpload class="size-7 text-muted-foreground" />
                    </div>

                    <div class="space-y-px">
                        <p class="font-medium text-sm text-muted-foreground">
                            Drag files here or click to select files
                        </p>
                        <p class="text-sm text-muted-foreground/70">
                            You can upload
                            <span v-if="true">
                                {{ $props.maxFiles === Infinity ? 'multiple' : $props.maxFiles }} files (up to {{ filterBytes(maxSize * 1024 * 1024) }} each)
                            </span>
                            <span v-else>
                                a file of {{ filterBytes(10) }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- File Card -->
        <ScrollArea v-if="files.length" class="h-fit w-full px-3">
            <div class="max-h-48 space-y-4">
                <div v-for="(file, index) in files" :key="index" class="relative flex items-center space-x-4">
                    <div class="flex flex-1 space-x-4">
                        <div v-if="isFileWithPreview(file)" class="max-w-12 max-h-12">
                            <img
                                :src="file.preview"
                                :alt="file.name"
                                class="aspect-square border shrink-0 w-full h-full rounded-md object-cover"
                            >
                        </div>

                        <div class="flex w-full flex-col gap-2">
                            <div class="space-y-px">
                                <p class="line-clamp-1 text-sm font-medium text-foreground/80">
                                    {{ file.name }}
                                </p>

                                <p class="text-xs text-muted-foreground">
                                    {{ filterBytes(file.size) }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <Button type="button" class="size-7 p-0" @click="removeFile(index)">
                            <IconCross class="size-4 " aria-hidden="true" />
                            <span class="sr-only">Remove file</span>
                        </Button>
                    </div>
                </div>
            </div>
        </ScrollArea>
    </div>
</template>

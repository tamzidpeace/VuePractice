<template>
    <Dialog modal :header="header" v-model:visible="visible" :draggable="false" :style="style" :closeOnEscape="true"
       :dismissable-mask="true" @hide="closeModal">
      <slot name="body">
      Defalut body
      </slot>

        <template v-if="hasFooter">
            <slot name="footer" />
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Dialog from 'primevue/dialog';

interface Props {
    header: string
    visible?: boolean
    hasFooter?: boolean
    style?: object
}

const props = withDefaults(defineProps<Props>(), {
    header: 'Table Header',
    visible: false,
    hasFooter: false,
    style: { width: '50vw' }
});

const visible = ref<boolean>(props.visible);
const emit = defineEmits<{ (e: 'closeModal'): void }>();

const closeModal = () => emit('closeModal');

watch(() => props.visible, (newValue) => {
    visible.value = newValue;
});

</script>

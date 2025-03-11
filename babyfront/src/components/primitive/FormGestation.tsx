import { Field, Input, StackSeparator, VStack } from "@chakra-ui/react";

export default function FormGestation() {
    return (
        <>
            <VStack
                separator={<StackSeparator/>}
                gap="12px"
            >

            </VStack>
            <form
                name="myForm"
                id="form"
            >
                <VStack gap="12px">
                    <Field.Root>
                        <Field.Label>Nome do bebê: </Field.Label>
                        <Input
                            placeholder="Nome do Bebê"
                            type="text"
                            name="name"
                            outlineColor="#A78BFA"
                        />
                    </Field.Root>
                </VStack>
            </form>
        </>
    )
}
import { View, TextInput, TextInputProps } from "react-native";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/ui/icon";

type InputFieldProps = TextInputProps & {
    label: string;
    icon?: any;
    id: string;
};

export const InputField = ({
    label,
    icon,
    id,
    style,
    ...textInputProps
}: InputFieldProps) => {
    return (
        <View className="gap-2 mb-4">
            <Label htmlFor={id} nativeID={id}>
                {label}
            </Label>

            <View className="flex-row items-center gap-2 px-3 py-1 border rounded-xl border-input bg-input/30">
                {icon && <Icon as={icon} className="text-muted-foreground size-4" />}

                <TextInput
                    id={id}
                    className="w-full font-raleway text-text placeholder:text-text"
                    style={style}
                    {...textInputProps} // Pass down all other TextInput props
                />
            </View>
        </View>
    );
};

import { View, TextInput } from "react-native";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/ui/icon";

type InputFieldProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    icon: any;
    id: string;
};

export const InputField = ({
    label,
    value,
    onChangeText,
    placeholder,
    icon,
    id,
}: InputFieldProps) => {
    return (
        <View className="gap-2 mb-4">
            <Label htmlFor={id} nativeID={id}>
                {label}
            </Label>

            <View className="flex-row items-center gap-2 px-3 py-1 border rounded-xl border-input bg-input/30">
                <Icon as={icon} className="text-muted-foreground size-4" />

                <TextInput
                    id={id}
                    className="w-full font-raleway text-text"
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
};

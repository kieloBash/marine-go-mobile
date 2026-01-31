import { EyeClosedIcon, EyeIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'

interface IProps {
    value: any;
    onChange: (e: any) => void;
    placeholder: string;
    className: string;
}

const PasswordInput = ({ value, onChange, placeholder, className }: IProps) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <TextInput
                id='password'
                placeholder={placeholder}
                className={className}
                value={value}
                onChangeText={onChange}
                secureTextEntry={!visible}
            />
            <Button onPress={() => setVisible(prev => !prev)} variant={"ghost"} className='text-sm text-primary font-raleway-semibold' size={"icon"}>
                <Icon as={visible ? EyeClosedIcon : EyeIcon} className='text-muted-foreground size-4' />
            </Button>
        </>
    )
}

export default PasswordInput
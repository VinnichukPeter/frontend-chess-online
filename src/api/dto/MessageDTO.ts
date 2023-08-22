class MessageDTO {
    text: string;
    color: boolean;

    constructor(text: string, color: boolean) {
        this.text = text;
        this.color = color;
    }
}

export default MessageDTO;
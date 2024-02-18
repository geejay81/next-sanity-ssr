import { PortableText } from "@portabletext/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PortableTextBlock } from "sanity"

type Props = { content: PortableTextBlock[] }

export default function BlockContent({ content }: Props) {

    const serializers = {
        types: {
          code: (props: any) => (
            <div className="border-1">
                <SyntaxHighlighter
                    useInlineStyles={true} 
                    language={props.language}
                    style={gradientDark}>
                    {props.value.code}
                </SyntaxHighlighter>
            </div>
          ),
        },
      }

    return (
        <PortableText value={content} components={serializers}></PortableText>
    );
}
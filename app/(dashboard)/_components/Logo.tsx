// C:\Users\Juhainah\nexus-lms\app\(dashboard)\_components\Logo.tsx
import Image from "next/image";

export const Logo = () => {
    return (
        <div style={{ marginTop: '0', marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                height={120}
                width={120}
                alt="logo"
                src="/Logo.png"
            />
        </div>
    );
}


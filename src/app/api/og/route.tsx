import { ImageResponse } from 'next/og';
// App router includes @vercel/og capabilities natively

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // ?weight=<adult_weight>
        const hasWeight = searchParams.has('weight');
        const weight = hasWeight
            ? searchParams.get('weight')?.slice(0, 100)
            : '115';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#020617',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                >
                    <div tw="flex flex-col items-center max-w-4xl p-16 text-center">
                        <h1 tw="text-6xl font-bold tracking-tight text-white mb-4">
                            Corso<span style={{ color: '#FF5F1F' }}>Guard</span>
                        </h1>
                        <p tw="text-4xl text-neutral-300 mb-8" style={{ fontFamily: 'sans-serif' }}>
                            My Cane Corso will grow to be
                        </p>
                        <div tw="flex mt-8 mb-8">
                            <span tw="text-9xl font-black text-white">{weight} lbs</span>
                        </div>
                        <p tw="text-3xl text-neutral-400 mt-4">
                            Calculate your pup's future weight today.
                        </p>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}

import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "linear-gradient(135deg, #f0ebff 0%, #fff 100%)",
                    padding: "80px",
                    color: "#2d2d30",
                    fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                        style={{
                            width: "72px",
                            height: "72px",
                            borderRadius: "24px",
                            backgroundColor: "#b19cd9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: "42px",
                            fontWeight: 700,
                        }}
                    >
                        P
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "24px", margin: 0, color: "#8b8b8b" }}>中京大学学生向け学習ハブ</p>
                        <h1 style={{ fontSize: "64px", margin: 0, fontWeight: 700 }}>PassPal</h1>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "36px", fontSize: "28px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ margin: 0, fontWeight: 600 }}>課題を逃さない</p>
                        <p style={{ margin: "12px 0 0", color: "#8b8b8b", fontSize: "24px" }}>ALBO・MaNaBo・ポータルをまとめてチェック</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ margin: 0, fontWeight: 600 }}>時間割もワンタップ</p>
                        <p style={{ margin: "12px 0 0", color: "#8b8b8b", fontSize: "24px" }}>締切と授業スケジュールをスマート管理</p>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ margin: 0, fontSize: "24px", color: "#8b8b8b" }}>passpal.app</p>
                    <div
                        style={{
                            padding: "18px 32px",
                            backgroundColor: "#b19cd9",
                            color: "#fff",
                            borderRadius: "16px",
                            fontSize: "28px",
                            fontWeight: 600,
                        }}
                    >
                        学生生活をもっとスマートに
                    </div>
                </div>
            </div>
        ),
        size
    );
}

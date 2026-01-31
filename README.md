
<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieh0325的個人網站</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">首頁</a></li>
                <li><a href="bookmarks.html">收藏書籤</a></li>
                <li><a href="youtube.html">收藏Youtube</a></li>
                <li><a href="https://halo.nieh0325.ddns-ip.net" target="_blank">博客</a></li>
                <li><a href="https://shopee.tw/nieh0325" target="_blank">蝦皮賣場</a></li>
                <li><a href="resume.html">個人履歷</a></li>



            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <h1>歡迎來到 Nieh0325 的網站</h1>
            <div class="profile-image">
                <img src="./images/profile.jpg" alt="聶哲政的個人照片" class="avatar">
            </div>
            <p>嗨！我是 Nieh0325，歡迎來到我的個人網站。</p>
            <div id="current-date" style="margin-top: 10px; font-weight: 600; color: var(--primary-color);"></div>

            <!-- 整合搜尋區域 -->
            <div class="search-container">
                <form id="global-search" class="search-form" onsubmit="handleSearch(event)">
                    <img id="search-engine-icon" src="https://www.google.com/favicon.ico" alt="Engine"
                        class="search-icon">
                    <select id="engine-select" onchange="updateSearchEngine()"
                        style="border:none; background:transparent; font-size: 0.9rem; margin-right: 10px; cursor: pointer; outline: none;">
                        <option value="google" selected>Google</option>
                        <option value="bing">Bing</option>
                        <option value="yahoo">Yahoo</option>
                        <option value="baidu">Baidu</option>
                        <option value="duckduckgo">DuckDuckGo</option>
                    </select>
                    <input type="text" id="search-input" name="q" placeholder="在此輸入搜尋字詞..." required>
                    <button type="submit">搜尋</button>
                </form>
            </div>

            <script>
                const engines = {
                    google: { action: "https://www.google.com/search", icon: "https://www.google.com/favicon.ico" },
                    bing: { action: "https://www.bing.com/search", icon: "https://www.bing.com/favicon.ico" },
                    yahoo: { action: "https://search.yahoo.com/search", icon: "https://www.yahoo.com/favicon.ico" },
                    baidu: { action: "https://www.baidu.com/search", icon: "https://www.baidu.com/favicon.ico" },
                    duckduckgo: { action: "https://duckduckgo.com/", icon: "https://duckduckgo.com/favicon.ico" }
                };

                function updateSearchEngine() {
                    const engine = document.getElementById('engine-select').value;
                    const icon = document.getElementById('search-engine-icon');
                    icon.src = engines[engine].icon;
                }

                function handleSearch(event) {
                    event.preventDefault();
                    const engine = document.getElementById('engine-select').value;
                    const query = document.getElementById('search-input').value;
                    const url = engines[engine].action + "?q=" + encodeURIComponent(query);
                    window.open(url, '_blank');
                }

                function displayDate() {
                    const now = new Date();
                    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
                    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-TW', options);
                }
                displayDate();
            </script>
        </section>


        <section id="about">
            <h2>關於我</h2>
            <p>在這裡分享一些關於我的故事和經歷...
            <p>我有20多年射出成型工作經歷，其中約10年有包含射拉吹工藝，年輕時從事CNC加工行業也接近4-5年。平常愛玩電腦，看youtube頻道學習新知，測試新程式、AI程式
            </p>
        </section>

        <section id="projects">
            <h2>作品集</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>專案 1</h3>
                    <p>專案描述...</p>
                </div>
                <div class="project-card">
                    <h3>專案 2</h3>
                    <p>專案描述...</p>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>聯絡方式</h2>
            <div class="social-links"></div>
            <p>Email: <a href="mailto:nieh0325@gmail.com">nieh0325@gmail.com</a></p>

            <p><a href="https://halo.nieh0325.us.kg" target="_blank">訪問我的博客</a></p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Nieh0325. All rights reserved.</p>
    </footer>
</body>

</html>

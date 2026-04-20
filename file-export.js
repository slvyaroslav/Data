<script>
        function showTab(tab) {{
            document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
            document.querySelectorAll('.tab').forEach(e => e.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
            document.getElementById(tab + '-tab').classList.add('active');
        }}
        function toggleFullscreen() {{
            if (!document.fullscreenElement) {{
                document.documentElement.requestFullscreen();
            }} else {{
                document.exitFullscreen();
            }}
        }}
        document.addEventListener('fullscreenchange', function() {{
            var btn = document.getElementById('fs-btn');
            if (document.fullscreenElement) {{
                btn.textContent = '\u2715';
                btn.title = 'Згорнути';
            }} else {{
                btn.textContent = '\u26F6';
                btn.title = 'На весь екран';
            }}
        }});
        window.onload = function() {{
            showTab('main');
            hljs.highlightAll();
        }};
    </script>
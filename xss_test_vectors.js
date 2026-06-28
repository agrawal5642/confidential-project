// XSS payload test vectors for code search 
// bountyXSStest_unique12345 <script>alert('xss')</script>
// bountyXSStest_unique12345 <img src=x onerror=alert('xss')>
// bountyXSStest_unique12345 <svg/onload=alert('xss')>
// bountyXSStest_unique12345 <a href="javascript:alert('xss')">click</a>
// bountyXSStest_unique12345 "><script>alert('xss')</script>
function bountyXSStest_unique12345() {
    // Normal code that also contains HTML tags
    var html = '<div class="test"><b>bountyXSStest_unique12345</b></div>';
    document.innerHTML = html;
}

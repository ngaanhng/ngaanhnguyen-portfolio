$port = 8080
$url = "http://localhost:$port/"
Write-Host "=======================================================" -ForegroundColor Magenta
Write-Host "  NGUYEN NGA ANH - MULTIMEDIA PORTFOLIO SERVER         " -ForegroundColor Yellow
Write-Host "  Running at: $url                                     " -ForegroundColor Green
Write-Host "  Press Ctrl+C to stop the server                      " -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Magenta

Start-Process $url

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $localPath = $request.Url.LocalPath.TrimStart('/')
    if ($localPath -eq "") { $localPath = "index.html" }
    $filePath = Join-Path (Get-Location) $localPath

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css"  { $response.ContentType = "text/css; charset=utf-8" }
            ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
            ".svg"  { $response.ContentType = "image/svg+xml" }
            ".png"  { $response.ContentType = "image/png" }
            ".jpg"  { $response.ContentType = "image/jpeg" }
            ".json" { $response.ContentType = "application/json; charset=utf-8" }
            default { $response.ContentType = "application/octet-stream" }
        }
        
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $errorBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.OutputStream.Write($errorBytes, 0, $errorBytes.Length)
    }
    $response.OutputStream.Close()
}
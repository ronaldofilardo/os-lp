# Gera os assets de marca locais em public/: logo.png, favicon.ico, apple-touch-icon.png, og-image.png
# Uso: powershell -ExecutionPolicy Bypass -File scripts\generate-brand-assets.ps1
# Paleta e tipografia espelham src/tokens.ts (Inter + JetBrains Mono / Cascadia Mono).

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$public = Join-Path $PSScriptRoot '..\public'
if (-not (Test-Path $public)) { throw "public/ nao encontrado: $public" }

# --- Paleta (src/tokens.ts) ---
$surface            = [System.Drawing.Color]::FromArgb(255, 14, 19, 33)     # #0e1321
$surfaceLowest      = [System.Drawing.Color]::FromArgb(255, 9, 14, 28)      # #090e1c
$primaryContainer   = [System.Drawing.Color]::FromArgb(255, 56, 189, 248)   # #38bdf8
$onPrimaryContainer = [System.Drawing.Color]::FromArgb(255, 0, 73, 101)     # #004965
$onSurface          = [System.Drawing.Color]::FromArgb(255, 222, 226, 246)  # #dee2f6
$onSurfaceVariant   = [System.Drawing.Color]::FromArgb(255, 189, 200, 209)  # #bdc8d1
$primary            = [System.Drawing.Color]::FromArgb(255, 142, 213, 255)  # #8ed5ff
$outlineVariant     = [System.Drawing.Color]::FromArgb(255, 62, 72, 79)     # #3e484f
$secondary          = [System.Drawing.Color]::FromArgb(255, 78, 222, 163)   # #4edea3
$transparent        = [System.Drawing.Color]::Transparent

# Acentos via codigo (script permanece ASCII puro)
$aTilde = [char]0x00E3   # a-tilde
$cCed  = [char]0x00E7    # c-cedilha
$tagline1 = "Desenvolvimento de Software Preventivo"
$tagline2 = "e Auditoria sem Refatora" + $cCed + $aTilde + "o"
$subline  = "Metodologia STE-DEV  |  Norma Aeroespacial ASD-STE100"

$interBold = New-Object System.Drawing.Font('Inter', 1, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$interReg  = New-Object System.Drawing.Font('Inter', 1, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$monoReg   = New-Object System.Drawing.Font('Cascadia Mono', 1, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$monoBold  = New-Object System.Drawing.Font('Cascadia Mono', 1, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$aaHigh = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$aaTextClear = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$aaTextAnti  = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

function New-Canvas([int]$w, [int]$h, [System.Drawing.Color]$bg) {
  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = $aaHigh
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  if ($bg.A -eq 255) { $g.Clear($bg) } else { $g.Clear($transparent) }
  [void]$g.Save()
  return $bmp
}

function Get-RoundedRect([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  return $p
}

function Draw-Monogram([System.Drawing.Graphics]$g, [float]$cx, [float]$cy, [float]$size, [float]$radius) {
  # Placa arredondada primary-container + "OS" em on-primary-container
  $x = $cx - ($size / 2); $y = $cy - ($size / 2)
  $path = Get-RoundedRect $x $y $size $size $radius
  $brush = New-Object System.Drawing.SolidBrush($primaryContainer)
  $g.FillPath($brush, $path)
  $brush.Dispose(); $path.Dispose()

  $fs = [int]($size * 0.46)
  $font = New-Object System.Drawing.Font('Inter', $fs, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $fmt = New-Object System.Drawing.StringFormat
  $fmt.Alignment = [System.Drawing.StringAlignment]::Center
  $fmt.LineAlignment = [System.Drawing.StringAlignment]::Center
  $fg = New-Object System.Drawing.SolidBrush($onPrimaryContainer)
  $rx = [float]$x
  $ry = [float]($y + ($size * 0.02))
  $rw = [float]$size
  $rh = [float]$size
  $rect = New-Object System.Drawing.RectangleF -ArgumentList $rx, $ry, $rw, $rh
  $g.DrawString('OS', $font, $fg, $rect, $fmt)
  $fg.Dispose(); $fmt.Dispose(); $font.Dispose()
}

function Draw-TrackedText([System.Drawing.Graphics]$g, [string]$text, [System.Drawing.Font]$font, [System.Drawing.Brush]$brush, [float]$x, [float]$y, [float]$tracking) {
  $cursor = $x
  foreach ($ch in $text.ToCharArray()) {
    $g.DrawString([string]$ch, $font, $brush, $cursor, $y)
    $cursor += $g.MeasureString([string]$ch, $font).Width + $tracking
  }
  return ($cursor - $x)
}

function Save-Png($bmp, [string]$path) {
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "  -> $path"
}

# ---------------------------------------------------------------- logo.png (512x128, transparente)
Write-Host 'Gerando logo.png...'
$logo = New-Canvas 512 128 $transparent
$g = [System.Drawing.Graphics]::FromImage($logo)
$g.TextRenderingHint = $aaTextAnti

Draw-Monogram $g 64 64 112 24

$wb = New-Object System.Drawing.Font('Inter', 36, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$brushOn = New-Object System.Drawing.SolidBrush($onSurface)
$g.DrawString('OMNI SISTEMAS', $wb, $brushOn, 140, 26)

$monoSm = New-Object System.Drawing.Font('Cascadia Mono', 13, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$brushPrim = New-Object System.Drawing.SolidBrush($primary)
[void](Draw-TrackedText $g 'ENGENHARIA PREVENTIVA STE-DEV' $monoSm $brushPrim 141 78 1.6)

$brushPrim.Dispose(); $brushOn.Dispose(); $monoSm.Dispose(); $wb.Dispose()
[void]$g.Save(); $g.Dispose()
Save-Png $logo (Join-Path $public 'logo.png')

# ---------------------------------------------------------------- apple-touch-icon.png (180x180, opaco)
Write-Host 'Gerando apple-touch-icon.png...'
$ati = New-Canvas 180 180 $surface
$g = [System.Drawing.Graphics]::FromImage($ati)
$g.TextRenderingHint = $aaTextAnti
Draw-Monogram $g 90 90 116 26
[void]$g.Save(); $g.Dispose()
Save-Png $ati (Join-Path $public 'apple-touch-icon.png')

# ---------------------------------------------------------------- favicon frames (16/32/48) -> .ico
function New-FaviconFrame([int]$size) {
  $bmp = New-Canvas $size $size $surfaceLowest
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.TextRenderingHint = $aaTextAnti
  Draw-Monogram $g ($size / 2) ($size / 2) ([float]($size * 0.82)) ([float]([Math]::Max(2, $size * 0.2)))
  [void]$g.Save(); $g.Dispose()
  return $bmp
}

Write-Host 'Gerando favicon.ico...'
$frames = @()
try {
  foreach ($s in 16, 32, 48) { $frames += New-FaviconFrame $s }

  $pngBlobs = @()
  foreach ($bmp in $frames) {
    $ms = New-Object System.IO.MemoryStream
    $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngBlobs += ,@($ms.ToArray(), $bmp.Width)
    $ms.Dispose(); $bmp.Dispose()
  }

  $icoPath = Join-Path $public 'favicon.ico'
  $fs = [System.IO.File]::Create($icoPath)
  $bw = New-Object System.IO.BinaryWriter($fs)
  $bw.Write([uint16]0)                    # reserved
  $bw.Write([uint16]1)                    # type = icon
  $bw.Write([uint16]$pngBlobs.Count)      # count
  $offset = 6 + (16 * $pngBlobs.Count)
  foreach ($entry in $pngBlobs) {
    $bytes = $entry[0]; $dim = [int]$entry[1]
    $bw.Write([byte]($(if ($dim -ge 256) { 0 } else { $dim })))  # width
    $bw.Write([byte]($(if ($dim -ge 256) { 0 } else { $dim })))  # height
    $bw.Write([byte]0)   # palette
    $bw.Write([byte]0)   # reserved
    $bw.Write([uint16]1) # planes
    $bw.Write([uint16]32)# bpp
    $bw.Write([uint32]$bytes.Length)
    $bw.Write([uint32]$offset)
    $offset += $bytes.Length
  }
  foreach ($entry in $pngBlobs) { $bw.Write($entry[0]) }
  $bw.Flush(); $bw.Dispose(); $fs.Dispose()
  Write-Host "  -> $icoPath"
}
finally {
  foreach ($bmp in $frames) { if ($bmp) { $bmp.Dispose() } }
}

# ---------------------------------------------------------------- og-image.png (1200x630)
Write-Host 'Gerando og-image.png...'
$og = New-Canvas 1200 630 $surface
$g = [System.Drawing.Graphics]::FromImage($og)
$g.TextRenderingHint = $aaTextClear

# Moldura tecnica
$pen = New-Object System.Drawing.Pen($outlineVariant, 2)
$g.DrawRectangle($pen, 40, 40, 1120, 550)
$pen.Dispose()

# Barra de acento superior esquerdo
$brushAccent = New-Object System.Drawing.SolidBrush($primaryContainer)
$g.FillRectangle($brushAccent, 40, 40, 180, 6)
$brushAccent.Dispose()

# Monograma
Draw-Monogram $g 170 190 128 28

# Marca / wordmark
$brushOn = New-Object System.Drawing.SolidBrush($onSurface)
$fontWm = New-Object System.Drawing.Font('Inter', 72, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('OMNI SISTEMAS', $fontWm, $brushOn, 270, 132)

# Tagline
$fontTag = New-Object System.Drawing.Font('Inter', 36, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$brushVar = New-Object System.Drawing.SolidBrush($onSurfaceVariant)
$g.DrawString($tagline1, $fontTag, $brushVar, 96, 320)
$g.DrawString($tagline2, $fontTag, $brushVar, 96, 368)

# Subline mono
$fontSub = New-Object System.Drawing.Font('Cascadia Mono', 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$brushPrim = New-Object System.Drawing.SolidBrush($primary)
$g.DrawString($subline, $fontSub, $brushPrim, 96, 448)

# Rodape: dominio + terminal prompt
$fontFoot = New-Object System.Drawing.Font('Cascadia Mono', 20, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$brushFoot = New-Object System.Drawing.SolidBrush($onSurfaceVariant)
$g.DrawString('omni-sistemas.com', $fontFoot, $brushFoot, 96, 520)

$fontTerm = New-Object System.Drawing.Font('Cascadia Mono', 44, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$brushSec = New-Object System.Drawing.SolidBrush($secondary)
$g.DrawString('> ste-dev_', $fontTerm, $brushSec, 720, 500)

# Scanlines sutis
$brushScan = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(14, 255, 255, 255))
for ($y = 0; $y -lt 630; $y += 4) { $g.FillRectangle($brushScan, 0, $y, 1200, 1) }
$brushScan.Dispose()

$brushSec.Dispose(); $fontTerm.Dispose(); $brushFoot.Dispose(); $fontFoot.Dispose()
$brushPrim.Dispose(); $fontSub.Dispose(); $brushVar.Dispose(); $fontTag.Dispose()
$brushOn.Dispose(); $fontWm.Dispose()
[void]$g.Save(); $g.Dispose()
Save-Png $og (Join-Path $public 'og-image.png')

$interBold.Dispose(); $interReg.Dispose(); $monoReg.Dispose(); $monoBold.Dispose()
Write-Host 'Assets gerados em public/.'

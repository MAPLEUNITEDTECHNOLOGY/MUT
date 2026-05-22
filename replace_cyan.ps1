$searchAndReplace = @(
    @{ Find = 'text-cyan-400'; Replace = 'text-red-500' },
    @{ Find = 'text-cyan-500'; Replace = 'text-red-600' },
    @{ Find = 'text-cyan-600'; Replace = 'text-red-700' },
    @{ Find = 'bg-cyan-400'; Replace = 'bg-red-500' },
    @{ Find = 'bg-cyan-500'; Replace = 'bg-red-600' },
    @{ Find = 'bg-cyan-600'; Replace = 'bg-red-700' },
    @{ Find = 'border-cyan-400'; Replace = 'border-red-500' },
    @{ Find = 'border-cyan-500'; Replace = 'border-red-600' },
    @{ Find = 'border-cyan-600'; Replace = 'border-red-700' },
    @{ Find = 'from-cyan-400 to-indigo-500'; Replace = 'from-red-400 to-[#e01030]' },
    @{ Find = 'from-cyan-500 to-indigo-600'; Replace = 'from-red-500 to-[#b00c25]' },
    @{ Find = 'from-cyan-600 to-indigo-600'; Replace = 'from-red-600 to-[#b00c25]' },
    @{ Find = 'text-indigo-400'; Replace = 'text-red-500' },
    @{ Find = 'text-indigo-500'; Replace = 'text-red-600' },
    @{ Find = '#00E5FF'; Replace = '#e01030' },
    @{ Find = '#22d3ee'; Replace = '#e01030' },
    @{ Find = 'rgba\(0,\s*229,\s*255\)'; Replace = 'rgba(224,16,48)' },
    @{ Find = 'rgba\(34,\s*211,\s*238,\s*'; Replace = 'rgba(224, 16, 48, ' },
    @{ Find = 'rgba\(6,\s*182,\s*212,\s*'; Replace = 'rgba(224, 16, 48, ' },
    @{ Find = 'rgba\(0,229,255,'; Replace = 'rgba(224,16,48,' }
)

$files = Get-ChildItem -Path ".\src", ".\design_system.md" -File -Recurse | Where-Object {
    $_.Extension -match "\.(tsx|ts|css|md)$"
}

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content

    foreach ($rule in $searchAndReplace) {
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?i)$($rule.Find)", $rule.Replace)
    }

    if ($content -cne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated: $($file.FullName)"
    }
}

# PowerShell script to remove all "cursor-pointer " from src folder
# This script will recursively search through all files in the src folder and remove "cursor-pointer " (with trailing space)

$srcPath = ".\src"
$searchPattern = "cursor-pointer "
$logFile = "cursor-pointer-removal.log"

# Initialize log file
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
"=== Cursor Pointer Removal Script Started at $timestamp ===" | Out-File -FilePath $logFile

# Get all files in src folder (excluding directories)
$files = Get-ChildItem -Path $srcPath -Recurse -File

$totalFiles = $files.Count
$modifiedFiles = 0
$totalOccurrences = 0

Write-Host "Scanning $totalFiles files in src folder..." -ForegroundColor Green

foreach ($file in $files) {
    $relativePath = $file.FullName.Replace((Get-Location).Path, ".")
    
    try {
        # Read file content
        $content = Get-Content -Path $file.FullName -Raw -ErrorAction Stop
        
        if ($content -match [regex]::Escape($searchPattern)) {
            # Count occurrences before removal
            $occurrences = ([regex]::Matches($content, [regex]::Escape($searchPattern))).Count
            $totalOccurrences += $occurrences
            
            # Remove "cursor-pointer " from content
            $newContent = $content -replace [regex]::Escape($searchPattern), ""
            
            # Write back to file
            Set-Content -Path $file.FullName -Value $newContent -NoNewline -ErrorAction Stop
            
            $modifiedFiles++
            $logMessage = "Modified: $relativePath - Removed $occurrences occurrence(s)"
            Write-Host $logMessage -ForegroundColor Yellow
            $logMessage | Out-File -FilePath $logFile -Append
        }
    }
    catch {
        $errorMessage = "Error processing $relativePath : $($_.Exception.Message)"
        Write-Host $errorMessage -ForegroundColor Red
        $errorMessage | Out-File -FilePath $logFile -Append
    }
}

# Summary
$endTimestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$summary = @"

=== Summary ===
Script completed at: $endTimestamp
Total files scanned: $totalFiles
Files modified: $modifiedFiles
Total 'cursor-pointer ' occurrences removed: $totalOccurrences

"@

Write-Host $summary -ForegroundColor Green
$summary | Out-File -FilePath $logFile -Append

if ($modifiedFiles -gt 0) {
    Write-Host "Log file created: $logFile" -ForegroundColor Cyan
    Write-Host "Please review the changes and test your application." -ForegroundColor Cyan
} else {
    Write-Host "No files needed modification." -ForegroundColor Green
}

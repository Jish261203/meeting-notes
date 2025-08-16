"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, FileText, Loader2 } from "lucide-react"

export default function MeetingNotesSummarizer() {
  const [transcript, setTranscript] = useState("")
  const [customInstructions, setCustomInstructions] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [summary, setSummary] = useState("")
  const [editableSummary, setEditableSummary] = useState("")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === "text/plain") {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setTranscript(content)
      }
      reader.readAsText(file)
    }
  }

  const generateSummary = async () => {
    if (!transcript.trim()) return

    setIsProcessing(true)

    // Mock AI processing - replace with actual AI service later
    setTimeout(() => {
      const mockSummary = `Meeting Summary:

Key Discussion Points:
• Main topics discussed based on the transcript
• Important decisions made during the meeting
• Action items identified

Next Steps:
• Follow-up tasks assigned to team members
• Deadlines and milestones established
• Future meeting scheduling

${customInstructions ? `\nCustom Instructions Applied: ${customInstructions}` : ""}`

      setSummary(mockSummary)
      setEditableSummary(mockSummary)
      setIsProcessing(false)
    }, 2000)
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent("Meeting Summary")
    const body = encodeURIComponent(editableSummary)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Meeting Notes Summarizer</h1>
          <p className="text-muted-foreground">Upload your meeting transcript and get an AI-powered summary</p>
        </div>

        {/* File Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Transcript
            </CardTitle>
            <CardDescription>Upload a text file containing your meeting transcript</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileText className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">Text files only</p>
                </div>
                <input id="file-upload" type="file" className="hidden" accept=".txt" onChange={handleFileUpload} />
              </label>
            </div>

            {transcript && (
              <div className="space-y-2">
                <Label htmlFor="transcript-preview">Transcript Preview</Label>
                <Textarea
                  id="transcript-preview"
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="Your meeting transcript will appear here..."
                  className="min-h-32"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Custom Instructions Section */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Instructions</CardTitle>
            <CardDescription>Add specific instructions for how you want the summary to be formatted</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              placeholder="e.g., Focus on action items, include participant names, highlight decisions made..."
              className="min-h-24"
            />
          </CardContent>
        </Card>

        {/* Generate Summary Button */}
        <div className="flex justify-center">
          <Button
            onClick={generateSummary}
            disabled={!transcript.trim() || isProcessing}
            size="lg"
            className="w-full max-w-md"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Summary...
              </>
            ) : (
              "Generate Summary"
            )}
          </Button>
        </div>

        {/* Summary Display and Edit Section */}
        {summary && (
          <Card>
            <CardHeader>
              <CardTitle>Generated Summary</CardTitle>
              <CardDescription>Review and edit your summary before sharing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={editableSummary}
                onChange={(e) => setEditableSummary(e.target.value)}
                className="min-h-48"
              />
              <div className="flex gap-2">
                <Button onClick={handleEmailShare} className="flex-1">
                  Share via Email
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(editableSummary)}
                  className="flex-1"
                >
                  Copy to Clipboard
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

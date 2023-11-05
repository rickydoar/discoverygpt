"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isRecording, setRecording] = useState(false);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream>();


  async function getMediaPermissions() {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert("err.message");
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  }

  async function startRecording() {
    getMediaPermissions();
    setRecording(true);
  }

  async function stopRecording() {
    setRecording(false);
  }

  return (
    <div className="w-full p-6 relative">
      {isRecording ? (
        <div>
          <Button onClick={() => stopRecording()} aria-label="Stop recording" className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-md">
            <svg
              className=" mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="6" width="6" x="9" y="7" />
              <rect height="14" rx="2" width="20" x="2" y="3" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
            </svg>
            Stop recording
          </Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => startRecording()} aria-label="Start recording" className="absolute top-4 right-4 bg-gray-800 text-white rounded-md">
            Start recording
          </Button>
        </div>
      )}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Opportunity Name</h1>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">People Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-300">Company A</p>
            <p className="text-gray-500 dark:text-gray-400">Role: Sales Manager</p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Jane Smith</h3>
            <p className="text-gray-600 dark:text-gray-300">Company B</p>
            <p className="text-gray-500 dark:text-gray-400">Role: Product Owner</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Command of the Message</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Current State</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Negative Consequences</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">After State</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Positive Business Outcomes</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Advice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Questions to Ask</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Question 1</li>
              <li>Question 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Concerns</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Concern 1</li>
              <li>Concern 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Next Steps</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Step 1</li>
              <li>Step 2</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


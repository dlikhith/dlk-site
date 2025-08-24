import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Image as ImageIcon, Mail, Code2, BookOpen, FileText, Upload, Sun, Moon, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

const Section = ({ id, className='', children }) => <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
const Container = ({ children, className='' }) => <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>

function useDarkMode(){
  const [dark,setDark] = useState(()=>{
    if(typeof window==='undefined') return false
    const stored = localStorage.getItem('dlk-theme')
    if(stored) return stored==='dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(()=>{
    const root = document.documentElement
    if(dark){ root.classList.add('dark'); localStorage.setItem('dlk-theme','dark') }
    else { root.classList.remove('dark'); localStorage.setItem('dlk-theme','light') }
  },[dark])
  return { dark, setDark }
}

const Nav = ({ onNav }) => {
  const { dark, setDark } = useDarkMode()
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow" />
          <div className="font-bold text-xl tracking-tight">DLK</div>
          <Badge className="hidden md:inline-flex">beta</Badge>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" onClick={()=>onNav('home')}>Home</Button>
          <Button variant="ghost" onClick={()=>onNav('about')}>About</Button>
          <Button variant="ghost" onClick={()=>onNav('code')}>Code</Button>
          <Button variant="ghost" onClick={()=>onNav('docs')}>Docs</Button>
          <Button variant="ghost" onClick={()=>onNav('gallery')}>Photos</Button>
          <Button variant="ghost" onClick={()=>onNav('contact')}>Contact</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={()=>setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
          </Button>
          <Button variant="outline" asChild><a href="#code" className="inline-flex items-center gap-2"><Github className="h-4 w-4"/>Repo</a></Button>
        </div>
      </Container>
    </div>
  )
}

const Hero = ({ onGetStarted }) => (
  <Section id="home" className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
    <Container className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Share. Code. Document. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">DLK</span>
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
            A clean, fast space to publish notes, write and share code snippets, maintain docs, and host your photo gallery — all in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={onGetStarted}>Get Started</Button>
            <Button variant="outline" asChild><a href="#about">Learn More</a></Button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2"><Code2 className="h-4 w-4"/> Code Snippets</div>
            <div className="flex items-center gap-2"><BookOpen className="h-4 w-4"/> Docs</div>
            <div className="flex items-center gap-2"><ImageIcon className="h-4 w-4"/> Photos</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 blur-2xl" />
            <Card className="relative rounded-3xl shadow-xl">
              <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5"/> Unified Workspace</CardTitle></CardHeader>
              <CardContent>
                <Tabs defaultValue="code" className="w-full">
                  <TabsList className="grid grid-cols-3 gap-2 mb-2">
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="docs">Docs</TabsTrigger>
                    <TabsTrigger value="photos">Photos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="code">
                    <pre className="mt-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 text-xs overflow-auto">
{`// hello.dlk.js
function greet(name){
  return \`Hello, \${name}! Welcome to DLK.\`;
}
console.log(greet("World"));`}
                    </pre>
                  </TabsContent>
                  <TabsContent value="docs">
                    <div className="prose dark:prose-invert max-w-none mt-3">
                      <h3>Getting Started</h3>
                      <p>Create, edit, and publish your notes using Markdown. Organize docs by topics and tags.</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="photos">
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {[1,2,3,4,5,6].map((i)=>(<div key={i} className="aspect-video rounded-xl bg-neutral-100 dark:bg-neutral-800" />))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Container>
  </Section>
)

const About = () => (
  <Section id="about" className="py-16">
    <Container>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Code2 className="h-5 w-5"/>, title: 'Write & Share Code', desc: 'Keep reusable snippets, highlight syntax, and share quickly.' },
          { icon: <BookOpen className="h-5 w-5"/>, title: 'Docs & Notes', desc: 'Maintain lightweight docs with Markdown and tags.' },
          { icon: <ImageIcon className="h-5 w-5"/>, title: 'Photo Gallery', desc: 'Upload images and organize by albums — perfect for demos.' },
        ].map((f, idx)=>(
          <Card key={idx} className="rounded-2xl">
            <CardHeader><CardTitle className="flex items-center gap-2">{f.icon}{f.title}</CardTitle></CardHeader>
            <CardContent className="text-neutral-600 dark:text-neutral-300">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </Section>
)

const CodeSpace = () => {
  const [title, setTitle] = useState('Sample Snippet')
  const [code, setCode] = useState(`// Paste your code here
const add = (a,b)=>a+b;
console.log(add(2,3));`)
  const download = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title.replace(/\s+/g,'_').toLowerCase()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }
  return (
    <Section id="code" className="py-16 bg-neutral-50 dark:bg-neutral-900/30">
      <Container>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2"><Code2 className="h-5 w-5"/> Code Snippets</h2>
          <div className="flex gap-2">
            <Input value={title} onChange={(e)=>setTitle(e.target.value)} className="w-44"/>
            <Button onClick={download}>Download</Button>
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="p-0">
            <textarea value={code} onChange={(e)=>setCode(e.target.value)} spellCheck={false} className="w-full h-[320px] p-4 font-mono text-sm rounded-2xl outline-none bg-white dark:bg-neutral-950 text-foreground" placeholder="Write or paste code here..." />
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}

function markdownToHtml(md){
  let html = md
    .replace(/^###\s?(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s?(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s?(.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^\-\s(.*)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m)=>`<ul>${m}</ul>`)
    .replace(/\n/g, '<br />')
  return html
}

const Docs = () => {
  const [docTitle, setDocTitle] = useState('Welcome to DLK Docs')
  const [md, setMd] = useState(`# Getting Started

- Create sections for your project.
- Use **Markdown** for formatting.
- Click Export to save as .md file.`)
  const exportMd = () => {
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `${docTitle.replace(/\s+/g,'_').toLowerCase()}.md`; a.click(); URL.revokeObjectURL(url)
  }
  return (
    <Section id="docs" className="py-16">
      <Container>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2"><BookOpen className="h-5 w-5"/> Documentation</h2>
          <div className="flex gap-2">
            <Input value={docTitle} onChange={(e)=>setDocTitle(e.target.value)} className="w-56"/>
            <Button onClick={exportMd}>Export</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Edit</CardTitle></CardHeader>
            <CardContent><Textarea value={md} onChange={(e)=>setMd(e.target.value)} className="min-h-[320px]"/></CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Preview</CardTitle></CardHeader>
            <CardContent><div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{__html: markdownToHtml(md)}}/></CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

const Gallery = () => {
  const [files, setFiles] = useState([])
  const onPick = (e) => {
    const f = Array.from(e.target.files || [])
    const readers = f.map(file => new Promise((res)=>{
      const r = new FileReader()
      r.onload = () => res({ name: file.name, src: r.result })
      r.readAsDataURL(file)
    }))
    Promise.all(readers).then(setFiles)
  }
  return (
    <Section id="gallery" className="py-16 bg-neutral-50 dark:bg-neutral-900/30">
      <Container>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2"><ImageIcon className="h-5 w-5"/> Photo Gallery</h2>
          <div className="flex items-center gap-2">
            <Input type="file" accept="image/*" multiple onChange={onPick} className="max-w-xs"/>
            <Button variant="secondary" className="inline-flex gap-2"><Upload className="h-4 w-4"/> Upload</Button>
          </div>
        </div>
        {files.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-400">No images yet. Use the Upload button to preview images locally. (Connect storage later.)</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {files.map((f, i)=>(
              <figure key={i} className="rounded-xl overflow-hidden border bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
                <img src={f.src} alt={f.name} className="aspect-square object-cover"/>
                <figcaption className="p-2 text-xs text-neutral-600 dark:text-neutral-400 truncate">{f.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks, ${name || 'friend'}! Your message is saved locally. Plug in an API/email service to send.`)
    setName(''); setEmail(''); setMessage('')
  }
  return (
    <Section id="contact" className="py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5"/> Contact</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-3">
                <Input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <Textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} required className="min-h-[140px]"/>
                <Button type="submit" className="w-full">Send</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="flex items-center gap-2"><Phone className="h-5 w-5"/> Quick Info</CardTitle></CardHeader>
            <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
              <p><strong>Project:</strong> DLK – Share info, code, docs, and photos.</p>
              <p><strong>Stack:</strong> React, Tailwind, Framer Motion.</p>
              <p><strong>Next steps:</strong> Hook file uploads to storage (e.g., Firebase, S3), add auth, and deploy.</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

const Footer = () => (
  <footer className="border-t border-neutral-200 dark:border-neutral-800">
    <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-600 dark:text-neutral-400">
      <div>© {new Date().getFullYear()} DLK. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#docs" className="hover:underline">Docs</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </Container>
  </footer>
)

export default function App(){
  const [active,setActive] = useState('home')
  useEffect(()=>{
    if(active) document.getElementById(active)?.scrollIntoView({ behavior:'smooth', block:'start' })
  },[active])
  return (
    <div className="min-h-[100dvh] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Nav onNav={setActive}/>
      <Hero onGetStarted={()=>setActive('code')}/>
      <About/>
      <CodeSpace/>
      <Docs/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}
